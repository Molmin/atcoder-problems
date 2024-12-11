Score : $400$ points

## Problem Statement

Iroha is into a game where you keep pets.

Iroha's pet is Takahashi. Initially, Takahashi's **STR** and **EXP** are $X$ and $0$, respectively.
These parameters increase in the following two kinds of training:

- Go to Kakomon Gym: the STR gets multiplied by $A$, and the EXP increases by $1$.
- Go to AtCoder Gym: the STR increases by $B$, and the EXP increases by $1$.

Takahashi evolves when his STR becomes $Y$ or greater, but Iroha thinks that makes him less cute.

Find the maximum possible EXP of Takahashi when he is trained without letting him evolve.

## Constraints

- $1 \leq X &lt; Y \leq 10^{18}$
- $2 \leq A \leq 10^9$
- $1 \leq B \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$ $A$ $B$

## Output

Print the maximum possible EXP of Takahashi under the given situation.

```input1
4 20 2 10
```

```output1
2
```

Initially, Takahashi's STR is $4$. We can make his EXP $2$ in the following course of training:

- First, go to Kakomon Gym, which makes his STR $8$ and his EXP $1$.
- Then, go to AtCoder Gym, which makes his STR $18$ and his EXP $2$.

On the other hand, there is no way to train him so that his EXP becomes greater than $2$.

```input2
1 1000000000000000000 10 1000000000
```

```output2
1000000007
```

Watch out for overflows.