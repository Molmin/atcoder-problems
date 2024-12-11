Score : $200$ points

## Problem Statement

Takahashi has a piano with $100$ keys arranged in a row.
The $i$-th key from the left is called key $i$.

He will play music by pressing $N$ keys one by one.
For the $i$-th press, he will press key $A_i$, using his left hand if $S_i=$ `L`, and his right hand if $S_i=$ `R`.

Before starting to play, he can place both of his hands on any keys he likes, and his **fatigue level** at this point is 0.
During the performance, if he moves one hand from key $x$ to key $y$, the fatigue level increases by $|y-x|$ (conversely, the fatigue level does not increase for any reason other than moving hands).
To press a certain key with a hand, that hand must be placed on that key.

Find the minimum possible fatigue level at the end of the performance.

## Constraints

- $1 \leq N \leq 100$
- $1 \leq A_i \leq 100$
- $N$ and $A_i$ are integers.
- $S_i$ is `L` or `R`.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $S_1$
> 
> $A_2$ $S_2$
> 
> $\vdots$
> 
> $A_N$ $S_N$

## Output

Print the minimum fatigue level at the end of the performance.

```input1
4
3 L
6 R
9 L
1 R
```

```output1
11
```

For example, the performance can be done as follows:

- Initially, place the left hand on key $3$ and the right hand on key $6$.
- Press key $3$ with the left hand.
- Press key $6$ with the right hand.
- Move the left hand from key $3$ to key $9$. The fatigue level increases by $|9-3| = 6$.
- Move the right hand from key $6$ to key $1$. The fatigue level increases by $|1-6| = 5$.
- Press key $9$ with the left hand.
- Press key $1$ with the right hand.

In this case, the fatigue level at the end of the performance is $6+5 = 11$, which is the minimum possible.

```input2
3
2 L
2 L
100 L
```

```output2
98
```

```input3
8
22 L
75 L
26 R
45 R
72 R
81 R
47 L
29 R
```

```output3
188
```