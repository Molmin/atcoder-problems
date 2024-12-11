Score : $400$ points

## Problem Statement

Takahashi has $10^{100}$ flower pots. Initially, he is not growing any plants.

You are given $Q$ queries to process in order.

There are three types of queries as follows.

- `1`: Prepare one empty flower pot and put a plant in it. Here, the plant's height is $0$.
- `2 T`: Wait for $T$ days. During this time, the height of every existing plants increases by $T$.
- `3 H`: Harvest all plants with a height of at least $H$, and output the number of plants harvested. The harvested plants are removed from their flower pots.

Assume that performing queries of the first and third types takes zero time.

## Constraints

- $1 \leq Q \leq 2 \times 10^{5}$
- $1 \leq T,H \leq 10^{9}$
- There is at least one query of the third type.
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $Q$
> 
> $\text{query}_1$
> 
> $\text{query}_2$
> 
> $\vdots$
> 
> $\text{query}_Q$

Each query is given in one of the following formats:

> $1$

> $2$ $T$

> $3$ $H$

## Output

Let there be $K$ queries of the third type, and print $K$ lines.
The $i$-th line ($1 \leq i \leq K$) should contain the answer to the $i$-th query of type $3$.

```input1
6
1
2 15
1
3 10
2 20
3 20
```

```output1
1
1
```

Queries are processed in the following order:

- In the first query, a plant of height $0$ is planted.
- In the second query, the height of the plant increases to $15$.
- In the third query, another plant of height $0$ is planted. Now there is one plant of height $15$ and one plant of height $0$.
- In the fourth query, all plants with height at least $10$ are harvested. Here, one plant of height $15$ gets harvested, and one plant of height $0$ remains. Since one plant was harvested, print $1$ on the first line.
- In the fifth query, the height of the remaining plant increases to $20$.
- In the sixth query, all plants with height at least $20$ are harvested. Here, one plant of height $20$ gets harvested. Thus, print $1$ on the second line.

```input2
15
1
1
2 226069413
3 1
1
1
2 214168203
1
3 214168203
1
1
1
2 314506461
2 245642315
3 1
```

```output2
2
2
4
```