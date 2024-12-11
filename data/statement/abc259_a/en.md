Score : $100$ points

## Problem Statement

Takahashi had his $N$-th birthday, when he was $T$ centimeters tall.<br>
Additionally, we know the following facts:

- In each year between Takahashi's birth ($0$-th birthday) and his $X$-th birthday, his height increased by $D$ centimeters. More formally, for each $i = 1, 2, \ldots, X$, his height increased by $D$ centimeters between his $(i-1)$-th birthday and his $i$-th birthday.
- Between Takahashi's $X$-th birthday and his $N$-th birthday, his height did not change.

Find Takahashi's height on his $M$-th birthday, in centimeters.

## Constraints

- $0 \leq M \lt N \leq 100$
- $1 \leq X \leq N$
- $1 \leq T \leq 200$
- $1 \leq D \leq 100$
- Takahashi was at least $1$ centimeter tall at his birth.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$ $X$ $T$ $D$

## Output

Print the answer as an integer.

```input1
38 20 17 168 3
```

```output1
168
```

In this sample, Takahashi was $168$ centimeters tall on his $38$-th birthday. Also, his height did not change between his $17$-th birthday and $38$-th birthday.<br>
From these facts, we find that he was $168$ centimeters tall on his $20$-th birthday, so the answer is $168$.

```input2
1 0 1 3 2
```

```output2
1
```

In this sample, Takahashi was $1$ centimeter tall on his $0(=M)$-th birthday and $3(=T)$ centimeters tall on his $1(=N)$-st birthday.

```input3
100 10 100 180 1
```

```output3
90
```