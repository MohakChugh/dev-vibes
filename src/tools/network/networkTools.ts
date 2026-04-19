export const ipv4ToIpv6 = (ip: string) => "::ffff:" + ip;
export const httpStatus = (code: number) => {
    const codes: Record<number, string> = { 200: "OK", 404: "Not Found", 500: "Server Error" };
    return codes[code] || "Unknown";
};
