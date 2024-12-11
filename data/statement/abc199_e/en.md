Score : $500$ points

## Problem Statement

Print the number of sequences $a$ that are permutations of $(1, 2, 3, \dots, N)$ and satisfy the following condition:

- for every integer $i$ such that $1 \le i \le M$, at most $Z_i$ numbers among $a_1, a_2, a_3, \dots, a_{X_i}$ are less than or equal to $Y_i$ .

## Constraints

- $2 \le N \le 18$
- $0 \le M \le 100$
- $1 \le X_i \lt N$
- $1 \le Y_i \lt N$
- $0 \le Z_i \lt N$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $X_1$ $Y_1$ $Z_1$
> 
> $X_2$ $Y_2$ $Z_2$
> 
> $X_3$ $Y_3$ $Z_3$
> 
> $\hspace{23pt} \vdots$
> 
> $X_M$ $Y_M$ $Z_M$

## Output

Print the answer.

```input1
3 1
2 2 1
```

```output1
4
```

The four sequences $a$ satisfying the condition are:

- $(1, 3, 2)$
- $(2, 3, 1)$
- $(3, 1, 2)$
- $(3, 2, 1)$

$(1, 2, 3)$ and $(2, 1, 3)$ violate the condition, since each of them has two numbers less than or equal to $2$ among $a_1, a_2$.

```input2
5 2
3 3 2
4 4 3
```

```output2
90
```

```input3
18 0
```

```output3
6402373705728000
```