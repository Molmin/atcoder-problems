Score : $600$ points

## Problem Statement

You are given two strings $S$ and $T$ consisting of lowercase English letters.

Takahashi starts with the string $S$. He can perform $K$ kinds of operations any number of times in any order.<br>
The $i$-th operation is the following:

Pay a cost of $1$.
Then, if the current string contains the **character** $C_i$, choose one of its occurrences and replace it with the **string** $A_i$.
Otherwise, do nothing.

Find the minimum total cost needed to make the string equal $T$.
If it is impossible to do so, print $-1$.

## Constraints

- $1\leq |S|\leq |T|\leq 50$
- $1\leq K\leq 50$
- $C_i$ is `a`, `b`,$\ldots$, or `z`.
- $1\leq |A_i|\leq 50$
- $S$, $T$, and $A_i$ are strings consisting of lowercase English letters.
- $C_i\neq A_i$, regarding $C_i$ as a string of length $1$.
- All pairs $(C_i,A_i)$ are distinct.

## Input

Input is given from Standard Input in the following format:

> $S$
> 
> $T$
> 
> $K$
> 
> $C_1$ $A_1$
> 
> $C_2$ $A_2$
> 
> $\vdots$
> 
> $C_K$ $A_K$

## Output

Print the minimum total cost needed to make the string equal $T$.
If it is impossible to do so, print $-1$.

```input1
ab
cbca
3
a b
b ca
a efg
```

```output1
4
```

Starting with $S=$`ab`, Takahashi can make $T=$`cbca` in four operations as follows:

- Replace the $1$-st character `a` in `ab` with `b` (Operation of the $1$-st kind). The string is now `bb`.
- Replace the $2$-nd character `b` in `bb` with `ca` (Operation of the $2$-nd kind). The string is now `bca`.
- Replace the $1$-st character `b` in `bca` with `ca` (Operation of the $2$-nd kind). The string is now `caca`.
- Replace the $2$-nd character `a` in `caca` with `b` (Operation of the $1$-st kind). The string is now `cbca`.

Each operation incurs a cost of $1$, for a total of $4$, which is the minimum possible.

```input2
a
aaaaa
2
a aa
a aaa
```

```output2
2
```

Two operations `a` $\to$ `aaa` $\to$ `aaaaa` incur a cost of $2$, which is the minimum possible.

```input3
a
z
1
a abc
```

```output3
-1
```

No sequence of operations makes $T=$`z` from $S=$`a`.