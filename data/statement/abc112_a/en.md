Score: $100$ points

## Problem Statement

In $2020$, AtCoder Inc. with an annual sales of more than one billion yen (the currency of Japan) has started a business in programming education.<br>
One day, there was an exam where a one-year-old child must write a program that prints `Hello World`, and a two-year-old child must write a program that receives integers $A, B$ and prints $A+B$.<br>
Takahashi, who is taking this exam, suddenly forgets his age.<br>
He decides to write a program that first receives his age $N$ ($1$ or $2$) as input, then prints `Hello World` if $N=1$, and additionally receives integers $A, B$ and prints $A+B$ if $N=2$.<br>
Write this program for him.  

## Constraints

- $N$ is $1$ or $2$.
- $A$ is an integer between $1$ and $9$ (inclusive).
- $B$ is an integer between $1$ and $9$ (inclusive).

## Input

Input is given from Standard Input in one of the following formats:  

> 1

> 2
> 
> $A$
> 
> $B$

## Output

If $N=1$, print `Hello World`; if $N=2$, print $A+B$.  

```input1
1
```

```output1
Hello World
```

As $N=1$, Takahashi is one year old. Thus, we should print `Hello World`.

```input2
2
3
5
```

```output2
8
```

As $N=2$, Takahashi is two years old. Thus, we should print $A+B$, which is $8$ since $A=3$ and $B=5$.