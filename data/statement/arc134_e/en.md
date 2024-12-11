Score : $900$ points

## Problem Statement

Snuke found a blackboard with nothing written on it.

He will do $N$ operations on this blackboard.
In the $i$-th operation, he chooses an integer between $1$ and $a_i$ (inclusive) and writes it on the blackboard.

After $N$ integers are written on the blackboard, Taro The First and Jiro The Second will play a game using it.
In the game, the two alternately do the operation below, with Taro The First going first.

- Let $X$ be the largest integer written on the blackboard.-   - If $X=0$, the current player **wins** and the game ends.
- Choose an integer $m$ between $1$ and $X$ (inclusive).
- Replace each of the $N$ integers written on the blackboard with its remainder when divided by $m$.

There are $\prod_{i=1}^{N}a_i$ ways for Snuke to write numbers on the blackboard. Find the number of ways among them that will result in Taro The First's win if both players play optimally, modulo $998244353$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 200$
- $1 \leq a_i \leq 200$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $\cdots$ $a_N$

## Output

Print the number of ways to write integers that will result in Taro The First's win if both players play optimally, modulo $998244353$.

```input1
1
3
```

```output1
1
```

- Taro The First will win only if Snuke writes $3$.
- Otherwise, Taro The First can only play a move that makes the integer on the blackboard $0$.

```input2
2
5 10
```

```output2
47
```

```input3
20
200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200 200
```

```output3
273710435
```

- Be sure to find the count modulo $998244353$.