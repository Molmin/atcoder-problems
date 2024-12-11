Score : $800$ points

## Problem Statement

On a number line, there are $2^N-1$ balls at the coordinates $x=1,2,3,...,2^N-1$, and the ball at $x=i$ has a weight of $w_i$. Here, $w_1, w_2,...,w_{2^N-1}$ is a permutation of the integers from $1$ through $2^N-1$. You will choose a non-negative integer $Z$ at most $2^N-1$ and attach a weight of $Z$ at each of the coordinates $x=\pm 100^{100^{100}}$.
Then, the balls will simultaneously start moving as follows.

- At each time, let $R$ be the total $\mathrm{XOR}$ of the weights of the balls and attached weights that are strictly to the right of the coordinate of a ball, and $L$ be the total $\mathrm{XOR}$ of the weights of the balls and attached weights that are strictly to the left. If $R &gt; L$, the ball moves to the right at a speed of $1$ per second; if $L &gt; R$, the ball moves to the left at a speed of $1$ per second; if $L=R$, the ball stands still.
- If multiple balls exist at the same coordinate (when, for instance, two balls coming from the left and right reach there), the balls combine into one whose weight is the total $\mathrm{XOR}$ of their former weights.

For how many values of $Z$ will all balls come to rest within $100^{100}$ seconds?

    
        What is $\mathrm{XOR}$?
    
    

        The bitwise $\mathrm{XOR}$ of non-negative integers $A$ and $B$, $A \oplus B$, is defined as follows.
        

- When $A \oplus B$ is written in binary, the $k$-th lowest bit ($k \geq 0$) is $1$ if exactly one of the $k$-th lowest bits of $A$ and $B$ is $1$, and $0$ otherwise.

        For instance, $3 \oplus 5 = 6$ (in binary: $011 \oplus 101 = 110$).  
        Generally, the bitwise $\mathrm{XOR}$ of $k$ non-negative integers $p_1, p_2, p_3, \dots, p_k$ is defined as $(\dots ((p_1 \oplus p_2) \oplus p_3) \oplus \dots \oplus p_k)$, which can be proved to be independent of the order of $p_1, p_2, p_3, \dots, p_k$.
    

## Constraints

- $2\leq N\leq 18$
- $1\leq w_i\leq 2^N-1$
- $w_i\neq w_j$ if $i\neq j$.
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $w_1$ $w_2$ $\ldots$ $w_{2^N-1}$

## Output

Print the answer as an integer.

```input1
2
1 2 3
```

```output1
1
```

Let us call a ball with a weight of $i$ simply $i$.

If $Z=0$, for instance, $1$ and $2$ first move to the right, and $3$ moves to the left.
Then, the moment $2$ and $3$ collide and combine into one ball, it starts moving to the left.
Afterward, the moment all balls from $1$ to $3$ combine into one ball, it stands still.
Thus, $Z=0$ satisfies the condition.

On the other hand, if $Z=3$, then $1$ and $2$ keep moving to the left, and $3$ keeps moving to the right, toward the attached weights for approximately $100^{100^{100}}$ seconds.
Thus, $Z=3$ does not satisfy the condition.

It turns out that $Z=0$ is the only value that satisfies the condition, so you should print $1$. 

```input2
3
7 1 2 3 4 5 6
```

```output2
2
```