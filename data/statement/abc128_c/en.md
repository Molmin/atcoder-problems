Score : $300$ points

## Problem Statement

We have $N$ switches with "on" and "off" state, and $M$ bulbs. The switches are numbered $1$ to $N$, and the bulbs are numbered $1$ to $M$.

Bulb $i$ is connected to $k_i$ switches: Switch $s_{i1}$, $s_{i2}$, $...$, and $s_{ik_i}$. It is lighted when the number of switches that are "on" among these switches is congruent to $p_i$ modulo $2$.

How many combinations of "on" and "off" states of the switches light all the bulbs?

## Constraints

- $1 \leq N, M \leq 10$
- $1 \leq k_i \leq N$
- $1 \leq s_{ij} \leq N$
- $s_{ia} \neq s_{ib} (a \neq b)$
- $p_i$ is $0$ or $1$.
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $M$
> 
> $k_1$ $s_{11}$ $s_{12}$ $...$ $s_{1k_1}$
> 
> $:$
> 
> $k_M$ $s_{M1}$ $s_{M2}$ $...$ $s_{Mk_M}$
> 
> $p_1$ $p_2$ $...$ $p_M$

## Output

Print the number of combinations of "on" and "off" states of the switches that light all the bulbs.

```input1
2 2
2 1 2
1 2
0 1
```

```output1
1
```

- Bulb $1$ is lighted when there is an even number of switches that are "on" among the following: Switch $1$ and $2$.
- Bulb $2$ is lighted when there is an odd number of switches that are "on" among the following: Switch $2$.

There are four possible combinations of states of (Switch $1$, Switch $2$): (on, on), (on, off), (off, on) and (off, off). Among them, only (on, on) lights all the bulbs, so we should print $1$.

```input2
2 3
2 1 2
1 1
1 2
0 0 1
```

```output2
0
```

- Bulb $1$ is lighted when there is an even number of switches that are "on" among the following: Switch $1$ and $2$.
- Bulb $2$ is lighted when there is an even number of switches that are "on" among the following: Switch $1$.
- Bulb $3$ is lighted when there is an odd number of switches that are "on" among the following: Switch $2$.

Switch $1$ has to be "off" to light Bulb $2$ and Switch $2$ has to be "on" to light Bulb $3$, but then Bulb $1$ will not be lighted. Thus, there are no combinations of states of the switches that light all the bulbs, so we should print $0$.

```input3
5 2
3 1 2 5
2 2 3
1 0
```

```output3
8
```