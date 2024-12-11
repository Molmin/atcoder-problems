Score : $1000$ points

## Problem Statement

There are $N$ coins numbered $1, 2, \ldots, N$ arranged in a row.
Initially, all coins face up.

Snuke chooses a permutation $p$ of $(1,\ldots,N)$ with equal probability, and do $N$ operations.
The $i$-th operation does the following.

- If the coin numbered $i$ faces down, do nothing.
- If the coin numbered $i$ faces up, turn that coin over and then turn over the coin numbered $p_i$.

After the $N$ operations, Snuke will receive $W^k$ yen (Japanese currency) from his mother, where $k$ is the number of coins facing up.

Find the expected value of the amount Snuke will get, multiplied by $N!$ (it can be proved that this is an integer), modulo $998244353$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 2 \times 10^5$
- $1 \leq W &lt; 998244353$

## Input

Input is given from Standard Input in the following format:

> $N$ $W$

## Output

Print the expected value of the amount Snuke will get, multiplied by $N!$, modulo $998244353$.

```input1
4 2
```

```output1
90
```

- When $p=(1,4,2,3)$, the operations go as follows.-   - In the $1$-st operation, the coin numbered $1$ faces down, and then the coin numbered $1$ faces up.
-   - In the $2$-nd operation, the coin numbered $2$ faces down, and then the coin numbered $4$ faces down.
-   - In the $3$-rd operation, the coin numbered $3$ faces down, and then the coin numbered $2$ faces up.
-   - In the $4$-th operation, nothing is done.
- In the end, two coins face up, so he receives $4$ yen.

```input2
2 100
```

```output2
10001
```

```input3
200000 12345
```

```output3
541410753
```

- Be sure to find the value modulo $998244353$.