export const toBigEndian = (input) => {
    if (typeof input !== 'number' || input > 0xFFFFFFFF) return;

    const bytes = [
        input >>> 24,
        input >>> 16,
        input >>> 8,
        input & 0xFF
    ];

    return bytes.map(byte => {
        let binary = '';
        for (let mask = 2 << 6; mask > 0; mask >>>= 1) {
            binary += (byte & mask) == mask ? '1' : '0';
        }
        return binary;
    }).join(' ');
};
