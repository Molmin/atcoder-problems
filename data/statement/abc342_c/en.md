Score: $350$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of lowercase English letters.

You will perform an operation $Q$ times on the string $S$.
The $i$-th operation $(1\leq i\leq Q)$ is represented by a pair of characters $(c _ i,d _ i)$, which corresponds to the following operation:

- Replace all occurrences of the character $c _ i$ in $S$ with the character $d _ i$.

Print the string $S$ after all operations are completed.

## Constraints

- $1\leq N\leq2\times10^5$
- $S$ is a string of length $N$ consisting of lowercase English letters.
- $1\leq Q\leq2\times10^5$
- $c _ i$ and $d _ i$ are lowercase English letters $(1\leq i\leq Q)$.
- $N$ and $Q$ are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $S$
> 
> $Q$
> 
> $c _ 1$ $d _ 1$
> 
> $c _ 2$ $d _ 2$
> 
> $\vdots$
> 
> $c _ Q$ $d _ Q$

## Output

Print the string $S$ after all operations are completed.

```input1
7
atcoder
4
r a
t e
d v
a r
```

```output1
recover
```

$S$ changes as follows: `atcoder` → `atcodea` → `aecodea` → `aecovea` → `recover`.
For example, in the fourth operation, all occurrences of `a` in $S={}$`aecovea` (the first and seventh characters) are replaced with `r`, resulting in $S={}$`recover`.

After all operations are completed, $S={}$`recover`, so print `recover`.

```input2
3
abc
4
a a
s k
n n
z b
```

```output2
abc
```

There may be operations where $c _ i=d _ i$ or $S$ does not contain $c _ i$.

```input3
34
supercalifragilisticexpialidocious
20
g c
l g
g m
c m
r o
s e
a a
o f
f s
e t
t l
d v
p k
v h
x i
h n
n j
i r
s i
u a
```

```output3
laklimamriiamrmrllrmlrkramrjimrial
```