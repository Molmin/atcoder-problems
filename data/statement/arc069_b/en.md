Score : $500$ points

## Problem Statement

Snuke, who loves animals, built a zoo.

There are $N$ animals in this zoo. They are conveniently numbered $1$ through $N$, and arranged in a circle.
The animal numbered $i (2 \leq i \leq N-1)$ is adjacent to the animals numbered $i-1$ and $i+1$. Also, the animal numbered $1$ is adjacent to the animals numbered $2$ and $N$, and the animal numbered $N$ is adjacent to the animals numbered $N-1$ and $1$.

There are two kinds of animals in this zoo: honest sheep that only speak the truth, and lying wolves that only tell lies.

Snuke cannot tell the difference between these two species, and asked each animal the following question: "Are your neighbors of the same species?" The animal numbered $i$ answered $s_i$. Here, if $s_i$ is `o`, the animal said that the two neighboring animals are of the same species, and if $s_i$ is `x`, the animal said that the two neighboring animals are of different species.

More formally, a sheep answered `o` if the two neighboring animals are both sheep or both wolves, and answered `x` otherwise.
Similarly, a wolf answered `x` if the two neighboring animals are both sheep or both wolves, and answered `o` otherwise.

Snuke is wondering whether there is a valid assignment of species to the animals that is consistent with these responses. If there is such an assignment, show one such assignment. Otherwise, print `-1`.

## Constraints

- $3 \leq N \leq 10^{5}$
- $s$ is a string of length $N$ consisting of `o` and `x`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $s$

## Output

If there does not exist an valid assignment that is consistent with $s$, print `-1`.
Otherwise, print an string $t$ in the following format. The output is considered correct if the assignment described by $t$ is consistent with $s$.

- $t$ is a string of length $N$ consisting of `S` and `W`.
- If $t_i$ is `S`, it indicates that the animal numbered $i$ is a sheep. If $t_i$ is `W`, it indicates that the animal numbered $i$ is a wolf.

```input1
6
ooxoox
```

```output1
SSSWWS
```

For example, if the animals numbered $1$, $2$, $3$, $4$, $5$ and $6$ are respectively a sheep, sheep, sheep, wolf, wolf, and sheep, it is consistent with their responses. Besides, there is another valid assignment of species: a wolf, sheep, wolf, sheep, wolf and wolf.

Let us remind you: if the neiboring animals are of the same species, a sheep answers `o` and a wolf answers `x`. If the neiboring animals are of different species, a sheep answers `x` and a wolf answers `o`.

![b34c052fc21c42d2def9b98d6dccd05c.png](https://atcoder.jp/img/arc069/b34c052fc21c42d2def9b98d6dccd05c.png)

```input2
3
oox
```

```output2
-1
```

Print `-1` if there is no valid assignment of species.

```input3
10
oxooxoxoox
```

```output3
SSWWSSSWWS
```