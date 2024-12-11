Score : $700$ points

## Problem Statement

There are $N$ cats.
We number them from $1$ through $N$.

Each of the cats wears a hat.
Cat $i$ says: "there are exactly $a_i$ different colors among the $N - 1$ hats worn by the cats except me."

Determine whether there exists a sequence of colors of the hats that is consistent with the remarks of the cats.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq a_i \leq N-1$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

Print `Yes` if there exists a sequence of colors of the hats that is consistent with the remarks of the cats; print `No` otherwise.

```input1
3
1 2 2
```

```output1
Yes
```

For example, if cat $1$, $2$ and $3$ wears red, blue and blue hats, respectively, it is consistent with the remarks of the cats.

```input2
3
1 1 2
```

```output2
No
```

From the remark of cat $1$, we can see that cat $2$ and $3$ wear hats of the same color.
Also, from the remark of cat $2$, we can see that cat $1$ and $3$ wear hats of the same color.
Therefore, cat $1$ and $2$ wear hats of the same color, which contradicts the remark of cat $3$.

```input3
5
4 3 4 3 4
```

```output3
No
```

```input4
3
2 2 2
```

```output4
Yes
```

```input5
4
2 2 2 2
```

```output5
Yes
```

```input6
5
3 3 3 3 3
```

```output6
No
```