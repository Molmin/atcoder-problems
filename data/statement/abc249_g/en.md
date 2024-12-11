Score : $600$ points

## Problem Statement

There are $N$ cards numbered $1, \dots, N$.  Card $i \, (1 \leq i \leq N)$ has an integer $A_i$ written on the front and an integer $B_i$ written on the back.

Consider choosing one or more cards so that the exclusive logical sum of the integers written on the front of the chosen cards is at most $K$.  Find the maximum possible exclusive logical sum of the integers written on the back of the chosen cards.

What is the exclusive logical sum?
The exclusive logical sum $a \oplus b$ of two integers $a$ and $b$ is defined as follows.

- The $2^k$'s place ($k \geq 0$) in the binary notation of $a \oplus b$ is $1$ if exactly one of the $2^k$'s places in the binary notation of $a$ and $b$ is $1$; otherwise, it is $0$.

For example, $3 \oplus 5 = 6$ (In binary notation: $011 \oplus 101 = 110$).
In general, the exclusive logical sum of $k$ integers $p_1, \dots, p_k$ is defined as $(\cdots ((p_1 \oplus p_2) \oplus p_3) \oplus \cdots \oplus p_k)$.  We can prove that it is independent of the order of $p_1, \dots, p_k$.

## Constraints

- $1 \leq N \leq 1000$
- $0 \leq K \lt 2^{30}$
- $0 \leq A_i, B_i \lt 2^{30} \, (1 \leq i \leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $B_1$
> 
> $\vdots$
> 
> $A_N$ $B_N$

## Output

Print the maximum possible exclusive logical sum of the integers written on the back of the chosen cards when choosing one or more cards so that the exclusive logical sum of the integers written on the front of the chosen cards is at most $K$.   If it is impossible to choose cards in such way, print $-1$ instead.

```input1
4 2
1 1
3 2
2 2
0 1
```

```output1
3
```

By choosing Cards $1$ and $2$, the exclusive logical sum of the integers written on the front of them is $2$, and that on the back of them is $3$, which is the maximum.

```input2
1 2
3 4
```

```output2
-1
```

It is impossible to choose cards so that the condition is satisfied.

```input3
10 326872757
487274679 568989827
267359104 968688210
669234369 189421955
1044049637 253386228
202278801 233212012
436646715 769734012
478066962 376960084
491389944 1033137442
214977048 1051768288
803550682 1053605300
```

```output3
1064164329
```