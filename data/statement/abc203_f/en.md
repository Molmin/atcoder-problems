Score : $600$ points

## Problem Statement

Takahashi's and Aoki's garden is covered with $N$ weeds, called Weed $1$, Weed $2$, $\ldots$, Weed $N$. The height of Weed $i$ is $A_i$.
Takahashi and Aoki have decided to pull these weeds, as follows:

- First, Aoki will choose at most $K$ weeds and pull them.
- Then, Takahashi will repeat the following operation until all weeds are pulled.-   - Let $H$ be the height of the tallest remaining weeds. Pull all weeds with heights above $\frac{H}{2}$ at once.

Aoki wants to minimize the number of operations done by Takahashi. Also, he wants to minimize it by pulling the minimum number of weeds needed.
Find the number of operations done by Takahashi and the number of weeds Aoki pulls in this case.

## Constraints

- $1 \leq N \leq 2\times 10^5$
- $0 \leq K \leq N$
- $1 \leq A_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the number of operations Takahashi will do and the number of weeds Aoki will pull, in this order, with a space in between.

```input1
4 1
2 3 4 9
```

```output1
2 1
```

For example, assume that Aoki chooses Weed $4$, with height $9$, and pulls it. Then, the tallest remaining weed is Weed $3$, with height $4$.
We have $\frac{4}{2}=2$, and Takahashi will pull Weed $2$ and $3$ in the first operation, since $2&lt;3$ and $2&lt;4$. Then, he will pull Weed $1$ in the second operation, completing his work in two operations.
On the other hand, he will not complete his work in one operation, no matter which one weed Aoki chooses.

Also, if Aoki pulls no weed, Takahashi will have to do three operations, so Aoki must pull at least one weed to minimize the number of operations done by Takahashi.

```input2
3 3
2 3 5
```

```output2
0 3
```

If Aoki pulls all weeds, Takahashi has to do zero operations, which is obviously the smallest number possible.

```input3
9 8
137 55 56 60 27 28 133 56 55
```

```output3
1 4
```