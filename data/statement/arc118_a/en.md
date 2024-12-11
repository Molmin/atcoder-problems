Score : $300$ points

## Problem Statement

The consumption tax rate in the Republic of ARC is $t$ percent, where $t$ is a positive integer.

There is a shop called Seisu-ya *(integer shop)* there. It sells each positive integer $A$ for $A$ yen (Japanese currency) excluding tax, that is, $\left\lfloor\frac{100+t}{100}A\right\rfloor$ yen including tax. Here, $\lfloor x\rfloor$ denotes the largest integer not greater than $x$ for a real number $x$.

Although Seisu-ya sells every positive integer, there are some positive integer values that cannot be the tax-included price of an integer. Among those values, find the $N$-th smallest value.

## Constraints

- $1\leq t\leq 50$
- $1\leq N\leq 10^{9}$

## Input

Input is given from Standard Input in the following format:

> $t$ $N$

## Output

Print the answer.

```input1
10 1
```

```output1
10
```

In this sample, the consumption tax rate is $10$ percent.

- The integer $9$ is sold for $\left\lfloor \frac{110}{100}\times 9\right\rfloor = \lfloor 9.9\rfloor = 9$ yen including tax.
- The integer $10$ is sold for $\left\lfloor \frac{110}{100}\times 10\right\rfloor = \lfloor 11\rfloor = 11$ yen including tax.

From above, we can see that $10$ is not the tax-included price of any integer, and this is the minimum such value.

```input2
3 5
```

```output2
171
```

If the consumption tax rate is $3$ percent, the smallest values that cannot be the tax-included price of an integer are $34, 68, 102, 137, 171, \ldots$

```input3
1 1000000000
```

```output3
100999999999
```