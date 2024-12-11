Score : $600$ points

## Problem Statement

Among the sequences of length $K$ consisting of integers, $A=(A_1, \ldots, A_K)$, how many satisfy all of the conditions below?<br>
Find the count modulo $998244353$.

- <p>$0\leq A_i \leq M-1$ for every $i(1\leq i\leq K)$.</p>
- <p>$\displaystyle\prod_{i=1}^{K} A_i \equiv N \pmod M$.</p>

## Constraints

- $1 \leq K \leq 10^9$
- $0 \leq N \lt M \leq 10^{12}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $K$ $N$ $M$

## Output

Print the answer.

```input1
2 3 6
```

```output1
5
```

The five sequences $A$ satisfying the conditions are $(1,3),(3,1),(3,3),(3,5),(5,3)$.

```input2
10 0 2
```

```output2
1023
```

```input3
1000000000 20220326 1000000000000
```

```output3
561382653
```

Be sure to find the count modulo $998244353$.