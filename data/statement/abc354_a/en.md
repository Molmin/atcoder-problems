Score : $100$ points

## Problem Statement

Takahashi is growing a plant. Its height at the time of germination is $0\,\mathrm{cm}$. Considering the day of germination as day $0$, its height increases by $2^i\,\mathrm{cm}$ day $i$'s night $(0 \le i)$.

Takahashi's height is $H\,\mathrm{cm}$.

Every morning, Takahashi measures his height against this plant.  Find the first day such that the plant's height is strictly greater than Takahashi's height in the morning.

## Constraints

- $1 \leq H \leq 10^{9}$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $H$

## Output

Print an integer representing the first day such that the plant's height is greater than Takahashi's height in the morning.

```input1
54
```

```output1
6
```

The plant's height in the mornings of days $1, 2, 3, 4, 5, 6$ will be $1\,\mathrm{cm}, 3\,\mathrm{cm}, 7\,\mathrm{cm}, 15\,\mathrm{cm}, 31\,\mathrm{cm}, 63\,\mathrm{cm}$, respectively. The plant becomes taller than Takahashi in the morning day $6$, so print $6$.

```input2
7
```

```output2
4
```

The plant's height will be $7\,\mathrm{cm}$ in the morning of day $3$ and $15\,\mathrm{cm}$ in the morning day $4$. The plant becomes taller than Takahashi in the morning of day $4$, so print $4$. Note that, in the morning of day $3$, the plant is as tall as Takahashi, but not taller.

```input3
262144
```

```output3
19
```