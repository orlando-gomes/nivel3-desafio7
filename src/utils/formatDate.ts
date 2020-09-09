const formatDate = (date: string): string =>
  Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }).format(new Date(date));

export default formatDate;
