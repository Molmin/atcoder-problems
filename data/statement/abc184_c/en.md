Score : $300$ points

## Problem Statement

There is an infinite two-dimensional grid, and we have a piece called Super Ryuma at square $(r_1, c_1)$. *(Ryu means dragon and Ma means horse.)*
In one move, the piece can go to one of the squares shown below:

![](https://img.atcoder.jp/ghi/5e0cee61638840363c9e267280c1804e.jpg)

More formally, when Super Ryuma is at square $(a, b)$, it can go to square $(c, d)$ such that at least one of the following holds:

- $a + b = c + d$
- $a - b = c - d$
- $|a - c| + |b - d| \le 3$

Find the minimum number of moves needed for the piece to reach $(r_2, c_2)$ from $(r_1, c_1)$.

## Constraints

- All values in input are integers.
- $1 \le r_1, c_1, r_2, c_2 \le 10^9$

## Input

Input is given from Standard Input in the following format:

> $r_1$ $c_1$
> 
> $r_2$ $c_2$

## Output

Print the minimum number of moves needed for Super Ryuma to reach $(r_2, c_2)$ from $(r_1, c_1)$.

```input1
1 1
5 6
```

```output1
2
```

We need two moves - for example, $(1, 1) \rightarrow (5, 5) \rightarrow (5, 6)$.

```input2
1 1
1 200001
```

```output2
2
```

We need two moves - for example, $(1, 1) \rightarrow (100001, 100001) \rightarrow (1, 200001)$.

```input3
2 3
998244353 998244853
```

```output3
3
```

We need three moves - for example, $(2, 3) \rightarrow (3, 3) \rightarrow (-247, 253) \rightarrow (998244353, 998244853)$.

```input4
1 1
1 1
```

```output4
0
```