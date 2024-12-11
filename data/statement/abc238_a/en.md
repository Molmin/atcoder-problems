Score : $100$ points

## Problem Statement

Does $2^n \gt n^2$ hold?

## Constraints

- $n$ is an integer between $1$ and $10^9$ (inclusive).

## Input

Input is given from Standard Input in the following format:

> $n$

## Output

If $2^n \gt n^2$, print `Yes`; otherwise, print `No`.

```input1
5
```

```output1
Yes
```

Since $2^5=32,\ 5^2=25$, we have $2^n \gt n^2$, so `Yes` should be printed.

```input2
2
```

```output2
No
```

For $n=2$, we have $2^n=n^2=2^2$, so $2^n \gt n^2$ does not hold. Thus, `No` should be printed.

```input3
623947744
```

```output3
Yes
```