Score : $1100$ points

## Problem Statement

Consider strings of length $N$ consisting of `A`, `B`, and `C`.
Among them, find the number of strings that satisfy the following condition, <font color="red">modulo $2$</font>:

- Let $S_i$ be the string formed by the first $i$ characters of $S$.
Also let $A_i$, $B_i$, and $C_i$ be the numbers of `A`'s, `B`'s, and `C`'s in $S_i$, respectively.
For all $i$ such that $1 \le i \le N$, the following holds:-   - $A_i-B_i \le X$
-   - $B_i-C_i \le Y$
-   - $C_i-A_i \le Z$

You have $T$ test cases to solve.

## Constraints

- $1 \le T \le 10$
- $1 \le N \le 10^9$
- $0 \le X,Y,Z \le 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Each case is in the following format:

> $N$ $X$ $Y$ $Z$

## Output

For each case, print the answer.

```input1
1
3 2 1 0
```

```output1
0
```

$8$ strings satisfy the condition: `AAB`,`AAC`,`ABA`,`ABC`,`ACA`,`ACB`,`BAA`,`BAC`.
Therefore the answer is $0$.

```input2
10
1 22 9 92
14 7 74 39
23 50 8 6
93 40 9 60
68 8 47 64
11 68 18 24
3 26 54 8
46 17 90 86
86 76 45 55
80 68 79 62
```

```output2
1
0
0
0
1
1
1
0
1
0
```