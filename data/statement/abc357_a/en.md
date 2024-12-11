Score : $100$ points

## Problem Statement

There is a bottle of disinfectant that can disinfect exactly $M$ hands.

$N$ aliens come one by one to disinfect their hands.<br>
The $i$-th alien ($1 \leq i \leq N$) has $H_i$ hands and wants to disinfect all of their hands once.

Determine how many aliens can disinfect all of their hands.<br>
Here, even if there is not enough disinfectant left for an alien to disinfect all of their hands when they start, they will use up the remaining disinfectant.

## Constraints

- $1 \leq N, M \leq 100$
- $1 \leq H_i \leq 100$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $H_1$ $H_2$ $\ldots$ $H_N$

## Output

Print the number of aliens who can disinfect all of their hands.

```input1
5 10
2 3 2 5 3
```

```output1
3
```

The aliens disinfect their hands in the following steps:

- The first alien disinfects their two hands. The remaining disinfectant can disinfect $10-2=8$ hands.
- The second alien disinfects their three hands. The remaining disinfectant can disinfect $8-3=5$ hands.
- The third alien disinfects their two hands. The remaining disinfectant can disinfect $5-2=3$ hands.
- The fourth alien has five hands, but there is only enough disinfectant for three hands, so they use up the disinfectant without disinfecting all of their hands.

Thus, the first three aliens can disinfect all of their hands, so print $3$.

```input2
5 10
2 3 2 3 5
```

```output2
4
```

```input3
1 5
1
```

```output3
1
```

All aliens can disinfect their hands.