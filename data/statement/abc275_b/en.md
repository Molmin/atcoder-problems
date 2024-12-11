Score : $200$ points

## Problem Statement

There are non-negative integers $A$, $B$, $C$, $D$, $E$, and $F$, which satisfy $A\times B\times C\geq D\times E\times F$.<br>
Find the remainder when $(A\times B\times C)-(D\times E\times F)$ is divided by $998244353$.

## Constraints

- $0\leq A,B,C,D,E,F\leq 10^{18}$
- $A\times B\times C\geq D\times E\times F$
- $A$, $B$, $C$, $D$, $E$, and $F$ are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$ $C$ $D$ $E$ $F$

## Output

Print the remainder when $(A\times B\times C)-(D\times E\times F)$ is divided by $998244353$, as an integer.

```input1
2 3 5 1 2 4
```

```output1
22
```

Since $A\times B\times C=2\times 3\times 5=30$ and $D\times E\times F=1\times 2\times 4=8$,<br>
we have $(A\times B\times C)-(D\times E\times F)=22$. Divide this by $998244353$ and print the remainder, which is $22$.

```input2
1 1 1000000000 0 0 0
```

```output2
1755647
```

Since $A\times B\times C=1000000000$ and $D\times E\times F=0$,<br>
we have $(A\times B\times C)-(D\times E\times F)=1000000000$. Divide this by $998244353$ and print the remainder, which is $1755647$.

```input3
1000000000000000000 1000000000000000000 1000000000000000000 1000000000000000000 1000000000000000000 1000000000000000000
```

```output3
0
```

We have $(A\times B\times C)-(D\times E\times F)=0$. Divide this by $998244353$ and print the remainder, which is $0$.