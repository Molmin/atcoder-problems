Score : $500$ points

## Problem Statement

Consider a string $t$ consisting only of characters `A`, `B`, and `C`.
We can do the following operation with it:

- Choose any substring $t[l:r]$ and any permutation $(X, Y, Z)$ of characters $($`A`$,$`B`$,$`C`$)$. Here, $t[l:r]$ denotes the substring formed by the $l$-th through the $r$-th characters of $t$, where $l$ and $r$ are of your choice. Then, replace each character `A`, `B`, and `C` in $t[l:r]$ by $X$, $Y$, and $Z$, respectively.

For example, for a string $t =$ `ACBAAC`, we can choose a substring $t[3:6]$ and $(X,Y,Z)=($`C`$,$`B`$,$`A`$)$.
After this operation, the string will become `ACBCCA`.

Alina likes strings in which all characters are the same. She defines the beauty of a string $t$ as the minimum number of operations required to make all its characters equal.

You are given a string $S$ of length $N$ consisting only of characters `A`, `B`, and `C`.
Answer $Q$ queries. The $i$-th query is the following:

- Given integers $L_i$ and $R_i$, find the beauty of the substring $t=S[L_i:R_i]$.

## Constraints

- $1 \le N \le 10^5$
- $S$ is a string of length $N$ consisting only of characters `A`, `B`, and `C`.
- $1 \le Q \le 10^5$
- $1 \le L_i \le R_i \le N$
- All numbers in the input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $Q$
> 
> $S$
> 
> $L_1$ $R_1$
> 
> $L_2$ $R_2$
> 
> $\vdots$
> 
> $L_Q$ $R_Q$

## Output

Output $Q$ lines. In the $i$-th line, output the answer to the $i$-th query.

```input1
6 4
ABCCCA
3 5
2 3
1 3
1 6
```

```output1
0
1
2
2
```

In the first query, the string is $t =$ `CCC`, in which all letters are already equal. The answer is $0$.

In the second query, the string is $t =$ `BC`. We can change it to `BB` in one operation, by choosing a substring $t[2:2]$ and $(X,Y,Z)=($`A`$,$`C`$,$`B`$)$.

In the third query, the string is $t =$ `ABC`. We can change it to `AAB` in one operation, by choosing a substring $t[2:3]$ and $(X,Y,Z)=($`C`$,$`A`$,$`B`$)$, and then to `BBB` in the next operation, by choosing a substring $t[1:2]$ and $(X,Y,Z)=($`B`$,$`A`$,$`C`$)$.