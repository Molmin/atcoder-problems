Score : $100$ points

## Problem Statement

We call a $4$-digit integer with three or more consecutive same digits, such as $1118$, **good**.

You are given a $4$-digit integer $N$. Answer the question: Is $N$ **good**?

## Constraints

- $1000 \leq N \leq 9999$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

If $N$ is **good**, print `Yes`; otherwise, print `No`.

```input1
1118
```

```output1
Yes
```

$N$ is **good**, since it contains three consecutive $1$.

```input2
7777
```

```output2
Yes
```

An integer is also **good** when all the digits are the same.

```input3
1234
```

```output3
No
```