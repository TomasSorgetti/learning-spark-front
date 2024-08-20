export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  const formattedDate = date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return formattedDate;
};