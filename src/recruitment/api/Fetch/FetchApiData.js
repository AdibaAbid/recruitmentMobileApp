export async function fetch(fetchSubject) {
  const res = await fetchSubject();
  const subjectOptions = res.data.map((item, i) => {
    return {
      label: item,
      value: item,
      id: i++,
    };
  });
  return subjectOptions;
}

export const getFullYear = () => {
  const now = new Date().getUTCFullYear();
  const years = Array(now - (now - 50))
    .fill('')
    .map((v, idx) => {
      return {
        label: now - idx,
        value: now - idx.toString(),
        id: idx,
      };
    });

  return years;
};
