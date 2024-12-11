Score : $700$ points

## Problem Statement

There are $N$ slimes on a number line, and the $i$-th slime is at coordinate $A_i$. 
All these coordinates are distinct. 
Each slime has a weight of $1$. 
Also, you are given an integer $K$.

First, you will choose $K$ slimes and remove the others from the number line. 
Then, from time $0$, the chosen slimes will move as follows:

- Movement of each slime: Let $R$ be the total weight of slimes at coordinates greater than its own, and $L$ be the total weight of slimes at coordinates less than its own. 
Then, it moves with a velocity of $R-L$. Note that the velocity can be negative. That is, it moves in the negative direction if $R-L&lt;0$.

When two or more slimes reach the same coordinate at the same time, they merge. 
The weight of the merged slime is the sum of the weights of the slimes before merging. 
The merged slime will move according to the same rules as above.

The $K$ slimes will continue to merge until there is only one slime left. 
Let $t$ be the moment when this single slime is born. 
Your goal is to choose the $K$ slimes so that $t$ is maximized. 
Find the maximum value of $t$.

## Constraints

- $2 \leq K \leq N \leq 250000$
- $0 = A_1 &lt; A_2 &lt; \cdots &lt; A_N \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer as a real number. 
It will be considered correct if the absolute or relative error is at most $10^{-9}$.

```input1
3 2
0 1 2
```

```output1
1.00000000000000000000
```

- Choosing the 1st and 2nd slimes results in $t=0.5$.
- Choosing the 1st and 3rd slimes results in $t=1$.
- Choosing the 2nd and 3rd slimes results in $t=0.5$.

Thus, the answer is $1$.

```input2
4 3
0 1 4 9
```

```output2
2.83333333333333333333
```

If you choose the 1st, 2nd, and 4th slimes, the slimes move as follows:

- For convenience, call the 1st, 2nd, and 4th slimes $X$, $Y$, and $Z$, respectively.
- At time $0$: $X$, $Y$, and $Z$ start moving with velocity $+2$, $0$, and $-2$, respectively.
- At time $1/2$: $X$ and $Y$ merge at coordinate $1$. The merged slime, called $XY$, starts moving with velocity $1$. On the other hand, $Z$ is at coordinate $8$ and continues moving with velocity $-2$.
- At time $17/6$: $XY$ and $Z$ merge at coordinate $10/3$. Thus, $t=17/6$.

It is impossible to make $t$ larger than $17/6$, so this is the answer.

```input3
4 4
0 1 2 3
```

```output3
0.50000000000000000000
```

```input4
20 6
0 3441380 120768398 229897071 231209282 232046760 254924545 325399248 385631087 400098966 480503302 501372095 502644652 524585010 541761042 691400171 725009462 767549897 837806226 927396743
```

```output4
135453315.33333333333333333333
```