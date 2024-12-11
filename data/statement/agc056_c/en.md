Score : $900$ points

## Problem Statement

Consider making a string $s$ of length $N$ consisting of `0` and `1`, where $s$ must satisfy $M$ conditions.
The $i$-th condition is represented by integers $L_i$ and $R_i$ ($1 \leq L_i &lt; R_i \leq N$).
This means that there should be equal numbers of `0` and `1` between the $L_i$-th and $R_i$-th characters (inclusive) of $s$.

Find the lexicographically smallest string $s$ that satisfies all conditions.
It can be proved that the Constraints of the problem guarantee the existence of $s$ that satisfies the conditions.

## Constraints

- $2 \leq N \leq 10^6$
- $1 \leq M \leq 200000$
- $1 \leq L_i &lt; R_i \leq N$
- $(R_i-L_i+1) \equiv 0 \mod 2$
- $(L_i,R_i) \neq (L_j,R_j)$ ($i \neq j$)
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_M$ $R_M$

## Output

Print the answer.

```input1
4 2
1 2
3 4
```

```output1
0101
```

```input2
6 2
1 4
3 6
```

```output2
001100
```

```input3
20 10
6 17
2 3
14 19
5 14
10 15
7 20
10 19
3 20
6 9
7 12
```

```output3
00100100101101001011
```