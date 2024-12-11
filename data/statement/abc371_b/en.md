Score : $200$ points

## Problem Statement

In the Kingdom of AtCoder, the eldest son is always given the name Taro. No one else is given the name Taro.
The eldest son is the earliest born male child in each family.

There are $N$ families in the Kingdom, and $M$ babies were born.  Before the $M$ babies were born, none of the $N$ families had had any babies.

Information about the babies is given in chronological order of their birth.

The $i$-th baby born was born in family $A_i$, and the baby is male if $B_i$ is `M`, and female if it is `F`.

Determine for each of the $M$ babies whether the name given is Taro.

## Constraints

- $1\leq N,M\leq 100$
- $1\leq A_i\leq N$
- $B_i$ is `M` or `F`.
- All numbers in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_M$ $B_M$

## Output

Print $M$ lines.

The $i$-th line $(1\leq i \leq M)$ should contain `Yes` if the name given to the $i$-th baby is Taro, and `No` otherwise.

```input1
2 4
1 M
1 M
2 F
2 M
```

```output1
Yes
No
No
Yes
```

The first baby is the earliest born boy in family $1$, so he is named Taro.

The second baby is not the earliest born boy in family $1$, so he is not named Taro.

The third baby is a girl, so she is not named Taro.

The fourth baby is the earliest born **boy** in family $2$, so he is named Taro. Note that the third baby is also born in family $2$, but it is the earliest born boy who is named Taro.

```input2
4 7
2 M
3 M
1 F
4 F
4 F
1 F
2 M
```

```output2
Yes
Yes
No
No
No
No
No
```