Score : $200$ points

## Problem Statement

You are given an integer $N$.<br>
Do the following operation $K$ times on it and print the resulting integer.

- If $N$ is a multiple of $200$, divide it by $200$.
- Otherwise, see $N$ as a string and append $200$ to the end of it.-   - For example, $7$ would become $7200$ and $1234$ would become $1234200$.

## Constraints

- All values in input are integers.
- $1 \le N \le 10^5$
- $1 \le K \le 20$

## Input

Input is given from Standard Input in the following format:

> $N$ $K$

## Output

Print the answer as an integer.

```input1
2021 4
```

```output1
50531
```

Applying the operation on $N=2021$ results in $N$ becoming $2021 \rightarrow 2021200 \rightarrow 10106 \rightarrow 10106200 \rightarrow 50531$.

```input2
40000 2
```

```output2
1
```

```input3
8691 20
```

```output3
84875488281
```

The answer may not fit into the signed $32$-bit integer type.