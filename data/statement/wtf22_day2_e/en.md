Score : $2500$ points

## Problem Statement

You are given $N$ non-negative integers $A_1,A_2,\cdots,A_N$.
For each $k=1,2,\cdots,N$, solve the following problem.

Alice and Bob play the following game.

- <p>Alice chooses $k$ numbers from $A_1,A_2,\cdots,A_N$.
Let $x_1,x_2,\cdots,x_k$ be the chosen numbers (in arbitrary order).</p>
- <p>Bob makes a sequence of $2k$ non-negative integers $y=(y_1,y_2,\cdots,y_{2k})$, which must satisfy the following conditions.</p>
-   - $0 \leq y_1 \leq y_2 \leq \cdots \leq y_{2k}$.
-   - Let $z_i=y_{2i-1} \oplus y_{2i}$. Then, $\{z_1,z_2,\cdots,z_k\}$ coincides with $\{x_1,x_2,\cdots,x_k\}$ as a multiset.

Here, $\oplus$ denotes bitwise $\mathrm{XOR}$.

Let the **score** of the game be the value of $y_{2k}$.
Bob plays to minimize the score.
With this in mind, Alice plays to maximize the score.
What will the score be?

    
        What is bitwise $\mathrm{XOR}$?
    
    

        The bitwise $\mathrm{XOR}$ of non-negative integers $A$ and $B$,  $A\ \mathrm{XOR}\ B$, is defined as follows.
        

- When $A\ \mathrm{XOR}\ B$ is written in binary, the $k$-th lowest bit ($k \geq 0$) is $1$ if exactly one of the $k$-th lowest bits of $A$ and $B$ is $1$, and $0$ otherwise.

        For instance, $3\ \mathrm{XOR}\ 5 = 6$ (in binary: $011\ \mathrm{XOR}\ 101 = 110$).  
        Generally, the bitwise $\mathrm{XOR}$ of $k$ non-negative integers  $p_1, p_2, p_3, \dots, p_k$ is defined to be $(\dots ((p_1\ \mathrm{XOR}\ p_2)\ \mathrm{XOR}\ p_3)\ \mathrm{XOR}\ \dots\ \mathrm{XOR}\ p_k)$, which one can prove to be independent of the order of $p_1, p_2, p_3, \dots p_k$.
    

## Constraints

- $1 \leq N \leq 250000$
- $1 \leq A_i \leq 10^9$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $A_2$ $\cdots$ $A_N$

## Output

Print the answer.

```input1
3
1 2 3
```

```output1
2
6
6
```

Consider the case $k=1$.

- If Alice chooses $x_1=1$: Bob makes $y=(0,1)$, for the score of $1$.
- If Alice chooses $x_1=2$: Bob makes $y=(0,2)$, for the score of $2$.
- If Alice chooses $x_1=3$: Bob makes $y=(1,2)$, for the score of $2$.

Thus, Alice will choose $x_1=2$ or $x_1=3$, for the score of $2$.

Consider the case $k=2$.
If Alice chooses $(x_1,x_2)=(2,3)$ and Bob makes $y=(1,2,4,6)$, the score will be $6$.
This is an example of optimal play for both players, and the answer is $6$.

Consider the case $k=3$.
If Alice chooses $(x_1,x_2,x_3)=(1,2,3)$ and Bob makes $y=(0,1,1,2,4,6)$, the score will be $6$.
This is an example of optimal play for both players, and the answer is $6$.

```input2
5
1 1 1 1 1
```

```output2
1
3
5
7
9
```

```input3
5
1 2 4 8 16
```

```output3
16
24
28
30
31
```

```input4
20
167660508 377125547 866003430 419036363 234113368 201296307 408194538 249252693 207212853 190504619 306027011 652875643 335898069 545795899 204268068 274532279 342039277 975300308 901270584 360957186
```

```output4
536870912
1610612736
2684354560
3758096384
4831838208
4831838208
4831838208
4831838208
4831838208
5100273664
5100273664
5100273664
5100273664
5100273664
5100273664
5100273664
5100273664
5100273664
5100273664
5100273664
```