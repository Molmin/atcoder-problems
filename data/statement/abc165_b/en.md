Score : $200$ points

## Problem Statement

Takahashi has a deposit of $100$ yen (the currency of Japan) in AtCoder Bank.

The bank pays an annual interest rate of $1$ % compounded annually. (A fraction of less than one yen is discarded.)

Assuming that nothing other than the interest affects Takahashi's balance, in how many years does the balance reach $X$ yen or above for the first time?

## Constraints

- $101 \le X \le 10^{18}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $X$

## Output

Print the number of years it takes for Takahashi's balance to reach $X$ yen or above for the first time.

```input1
103
```

```output1
3
```

- The balance after one year is $101$ yen.
- The balance after two years is $102$ yen.
- The balance after three years is $103$ yen.

Thus, it takes three years for the balance to reach $103$ yen or above.

```input2
1000000000000000000
```

```output2
3760
```

```input3
1333333333
```

```output3
1706
```