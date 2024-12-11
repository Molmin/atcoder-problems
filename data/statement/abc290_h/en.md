Score : $600$ points

## Problem Statement

There are $N$ dogs numbered $1$ through $N$ and $M$ cats numbered $1$ through $M$.
You will arrange the $(N+M)$ animals in a line from left to right.
An arrangement causes each animal's **frustration** as follows:

- The frustration of dog $i$ is $A_i\times|x-y|$, where $x$ and $y$ are the numbers of cats to the left and right of that dog, respectively.
- The frustration of cat $i$ is $B_i\times|x-y|$, where $x$ and $y$ are the numbers of dogs to the left and right of that cat, respectively.

Find the minimum possible sum of the frustrations.

## Constraints

- $1\leq N,M \leq 300$
- $1\leq A_i,B_i \leq 10^9$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $M$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_M$

## Output

Print the answer as an integer.

```input1
2 2
1 3
2 4
```

```output1
6
```

Consider the following arrangement: dog $1$, cat $2$, dog $2$, cat $1$, from left to right.  Then,

- dog $1$'s frustration is $1\times|0-2|=2$;
- dog $2$'s frustration is $3\times|1-1|=0$;
- cat $1$'s frustration is $2\times|2-0|=4$; and
- cat $2$'s frustration is $4\times|1-1|=0$,

so the sum of the frustrations is $6$.  Rearranging the animals does not make the sum less than $6$, so the answer is $6$.

```input2
1 2
100
100 290
```

```output2
390
```

```input3
5 7
522 575 426 445 772
81 447 629 497 202 775 325
```

```output3
13354
```