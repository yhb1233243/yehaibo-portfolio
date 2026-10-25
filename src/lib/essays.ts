export function formatEssayDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function estimateReadingMinutes(body: string) {
  const units = body.match(/[\u4e00-\u9fff]|[A-Za-z0-9]+/g)?.length ?? 0;
  return Math.max(1, Math.ceil(units / 400));
}
