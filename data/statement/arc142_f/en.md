Score : $1000$ points

## Problem Statement

Two wizards, $X$ and $Y$, are fighting with a monster.

Initially, each of the wizards has a magic power of $0$. They know the following two spells.

- Spell $1$: Increases the caster's magic power by $1$.
- Spell $2$: Deals damage equal to the caster's magic power to the monster.

After each wizard uses a spell $N$ times, they will withdraw from the battle.<br>
For each $i=1, \ldots, N$, they must use one of the following combinations of spells for their $i$-th spells.

- $X$ casts Spell $a_i$, and $Y$ casts Spell $b_i$.
- $X$ casts Spell $c_i$, and $Y$ casts Spell $d_i$.

Find the maximum total damage that can be dealt to the monster before the withdrawal.

## Constraints

- $1 \leq N \leq 8000$
- $a_i,b_i,c_i,d_i \in \{1,2\}$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$ $c_1$ $d_1$
> 
> $\vdots$
> 
> $a_N$ $b_N$ $c_N$ $d_N$

## Output

Print the answer.

```input1
3
1 1 2 2
2 1 2 2
2 1 1 1
```

```output1
3
```

The maximum total damage can be achieved as follows.

- As the $1$-st spells, use $a_1=1,\, b_1=1$, increasing both $X$'s and $Y$'s magic powers to $1$.
- As the $2$-nd spells, use $c_2=2,\, d_2=2$, dealing $2$ points of damage in total.
- As the $3$-rd spells, use $a_3=2,\, b_3=1$, dealing $1$ point of damage by $X$'s spell and increasing $Y$'s magic power to $2$.

```input2
5
2 2 2 2
2 2 2 2
2 2 2 2
2 2 2 2
2 2 2 2
```

```output2
0
```

Casting Spell $2$ with a magic power of $0$ deals no damage.

```input3
8
1 1 2 2
2 2 2 1
1 1 2 1
1 1 2 2
2 1 1 1
1 2 1 2
2 1 1 2
2 1 2 1
```

```output3
20
```

```input4
20
2 1 2 1
2 1 1 1
1 2 1 1
2 2 1 2
2 2 2 1
1 1 2 1
1 2 2 2
2 2 2 1
1 1 1 2
1 2 1 2
1 2 2 2
2 1 1 2
2 1 1 1
1 2 1 2
1 2 1 2
1 1 1 2
1 1 2 1
2 2 1 1
1 2 2 2
2 1 1 2
```

```output4
138
```