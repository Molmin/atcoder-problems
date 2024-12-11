Score : $300$ points

## Problem Statement

You are given $N$ intervals numbered $1$ through $N$, that are as follows:

- if $t_i=1$, Interval $i$ is $[l_i,r_i]$;
- if $t_i=2$, Interval $i$ is $[l_i,r_i)$;
- if $t_i=3$, Interval $i$ is $(l_i,r_i]$;
- if $t_i=4$, Interval $i$ is $(l_i,r_i)$.

How many pairs of integers $(i,j)$ satisfying $1 \leq i \lt j \leq N$ are there such that Interval $i$ and Interval $j$ intersect?

What are $[X,Y],[X,Y),(X,Y],(X,Y)$?

- A closed interval $[X,Y]$ is an interval consisting of all real numbers $x$ such that $X \leq x \leq Y$.
- A half-open interval $[X,Y)$ is an interval consisting of all real numbers $x$ such that $X \leq x &lt; Y$.
- A half-open interval $(X,Y]$ is an interval consisting of all real numbers $x$ such that $X &lt; x \leq Y$.
- A open interval $(X,Y)$ is an interval consisting of all real numbers $x$ such that $X &lt; x &lt; Y$.

Roughly speaking, square brackets $[]$ mean the endpoint is included, and curly brackets $()$ mean the endpoint is excluded.

## Constraints

- $2 \leq N \leq 2000$
- $1 \leq t_i \leq 4$
- $1 \leq l_i \lt r_i \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $t_1$ $l_1$ $r_1$
> 
> $t_2$ $l_2$ $r_2$
> 
> $\hspace{1cm}\vdots$
> 
> $t_N$ $l_N$ $r_N$

## Output

Print the number of pairs of integers $(i,j)$ such that Interval $i$ and Interval $j$ intersect.

```input1
3
1 1 2
2 2 3
3 2 4
```

```output1
2
```

As defined in the Problem Statement, Interval $1$ is $[1,2]$, Interval $2$ is $[2,3)$, and Interval $3$ is $(2,4]$.

There are two pairs of integers $(i,j)$ such that Interval $i$ and Interval $j$ intersect: $(1,2)$ and $(2,3)$. For the first pair, the intersection is $[2,2]$, and for the second pair, the intersection is $(2,3)$.

```input2
19
4 210068409 221208102
4 16698200 910945203
4 76268400 259148323
4 370943597 566244098
1 428897569 509621647
4 250946752 823720939
1 642505376 868415584
2 619091266 868230936
2 306543999 654038915
4 486033777 715789416
1 527225177 583184546
2 885292456 900938599
3 264004185 486613484
2 345310564 818091848
1 152544274 521564293
4 13819154 555218434
3 507364086 545932412
4 797872271 935850549
2 415488246 685203817
```

```output2
102
```