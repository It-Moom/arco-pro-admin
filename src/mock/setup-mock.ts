export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
  if (mock !== false) setup();
};

export function successResponseWrap(data: unknown) {
  return {
    data,
    status: 'ok',
    msg: '请求成功',
    code: 20000,
  };
}

export function failResponseWrap(data: unknown, msg: string, code = 50000) {
  return {
    data,
    status: 'fail',
    msg,
    code,
  };
}
