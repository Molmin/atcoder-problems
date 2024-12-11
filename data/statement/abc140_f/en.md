Score : $600$ points

## Problem Statement

We have one slime.

You can set the *health* of this slime to any integer value of your choice.

A slime reproduces every second by spawning another slime that has strictly less health. You can freely choose the health of each new slime. The first reproduction of our slime will happen in one second.

Determine if it is possible to set the healths of our first slime and the subsequent slimes spawn so that the multiset of the healths of the $2^N$ slimes that will exist in $N$ seconds equals a multiset $S$.

Here $S$ is a multiset containing $2^N$ (possibly duplicated) integers: $S_1, \sim S_2, \sim ..., \sim S_{2^N}$.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 18$
- $1 \leq S_i \leq 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$ $S_2$ $...$ $S_{2^N}$

## Output

If it is possible to set the healths of the first slime and the subsequent slimes spawn so that the multiset of the healths of the $2^N$ slimes that will exist in $N$ seconds equals $S$, print `Yes`; otherwise, print `No`.

```input1
2
4 2 3 1
```

```output1
Yes
```

We will show one way to make the multiset of the healths of the slimes that will exist in $2$ seconds equal to $S$.

First, set the health of the first slime to $4$.

By letting the first slime spawn a slime whose health is $3$, the healths of the slimes that exist in $1$ second can be $4, \sim 3$.

Then, by letting the first slime spawn a slime whose health is $2$, and letting the second slime spawn a slime whose health is $1$, the healths of the slimes that exist in $2$ seconds can be $4, \sim 3, \sim 2, \sim 1$, which is equal to $S$ as multisets.

```input2
2
1 2 3 1
```

```output2
Yes
```

$S$ may contain multiple instances of the same integer.

```input3
1
1 1
```

```output3
No
```

```input4
5
4 3 5 3 1 2 7 8 7 4 6 3 7 2 3 6 2 7 3 2 6 7 3 4 6 7 3 4 2 5 2 3
```

```output4
No
```