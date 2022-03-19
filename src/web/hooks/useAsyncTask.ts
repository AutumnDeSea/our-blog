import { useCallback, useState } from 'react';

type TStaus = 'IDLE' | 'PROCESSING' | 'ERROR' | 'SUCCESS';

// 需要写返回类型，否则有意料之外的返回
type UseAsyncTaskType<T extends unknown[], R> = {
  run: (...arg: T) => Promise<R>;
  reset: () => void;
  message: string;
  status: TStaus
};

function useAsyncTask<T extends unknown[], R = unknown>(task: (...arg: T) => Promise<R>): UseAsyncTaskType<T, R> {
  const [status, setStatus] = useState<TStaus>('IDLE');
  const [message, setMessage] = useState('');
  const run = useCallback(async (...arg: T) => {
    setStatus('PROCESSING');
    try {
      const resp = await task(...arg);
      setStatus('SUCCESS');
      return resp;
      // 这个err的类型不好给 给Error
    } catch (err) {
      setStatus('ERROR');
      setMessage('xxx');
      // 这里必须throw，否则run的类型为Promise<R | undefined>和预料不同，报错
      throw new Error((<Error>err).toString());
    }
  }, [task]);
  const reset = useCallback(() => {
    setMessage('');
    setStatus('IDLE');
  }, []);
  return {
    run,
    reset,
    message,
    status,
  };
}
export default useAsyncTask;