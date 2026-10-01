export function detectMediaType(file) { return file?.type?.startsWith("video/") ? "video" : "audio"; }
