export const useMoneyFormat =
    () =>
        (
            value: number | string | null | undefined,
            minDecimals: number,
            maxDecimals: number,
            compact?: boolean,
        ) => {
            if (value) {
                const money = new Intl.NumberFormat('en-EN', {
                    minimumFractionDigits: minDecimals,
                    maximumFractionDigits: maxDecimals,
                    notation: compact ? 'compact' : 'standard',
                    compactDisplay: compact ? 'short' : 'long',
                });

                const valueNum = Number(value);

                return money.format(valueNum).toLowerCase();
            }
            return 0;
        };
