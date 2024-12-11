Score : $700$ points

## Problem Statement

We have a sandglass consisting of two bulbs, bulb A and bulb B. These bulbs contain some amount of sand.
When we put the sandglass, either bulb $A$ or $B$ lies on top of the other and becomes the *upper bulb*. The other bulb becomes the *lower bulb*.

The sand drops from the upper bulb to the lower bulb at a rate of $1$ gram per second.
When the upper bulb no longer contains any sand, nothing happens.

Initially at time $0$, bulb A is the upper bulb and contains $a$ grams of sand; bulb B contains $X-a$ grams of sand (for a total of $X$ grams).

We will turn over the sandglass at time $r_1,r_2,..,r_K$. Assume that this is an instantaneous action and takes no time. Here, time $t$ refer to the time $t$ seconds after time $0$.

You are given $Q$ queries.
Each query is in the form of $(t_i,a_i)$.
For each query, assume that $a=a_i$ and find the amount of sand that would be contained in bulb A at time $t_i$.

## Constraints

- $1 \leq X \leq 10^9$
- $1 \leq K \leq 10^5$
- $1 \leq r_1&lt;r_2&lt; .. &lt;r_K \leq 10^9$
- $1 \leq Q \leq 10^5$
- $0 \leq t_1&lt;t_2&lt; .. &lt;t_Q \leq 10^9$
- $0 \leq a_i \leq X (1 \leq i \leq Q)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $X$
> 
> $K$
> 
> $r_1$ $r_2$ .. $r_K$
> 
> $Q$
> 
> $t_1$ $a_1$
> 
> $t_2$ $a_2$
> 
> $:$
> 
> $t_Q$ $a_Q$

## Output

For each query, print the answer in its own line.

```input1
180
3
60 120 180
3
30 90
61 1
180 180
```

```output1
60
1
120
```

In the first query, $30$ out of the initial $90$ grams of sand will drop from bulb A, resulting in $60$ grams.
In the second query, the initial $1$ gram of sand will drop from bulb A, and nothing will happen for the next $59$ seconds. Then, we will turn over the sandglass, and $1$ second after this, bulb $A$ contains $1$ gram of sand at the time in question.

```input2
100
1
100000
4
0 100
90 100
100 100
101 100
```

```output2
100
10
0
0
```

In every query, the upper bulb initially contains $100$ grams, and the question in time comes before we turn over the sandglass.

```input3
100
5
48 141 231 314 425
7
0 19
50 98
143 30
231 55
342 0
365 100
600 10
```

```output3
19
52
91
10
58
42
100
```