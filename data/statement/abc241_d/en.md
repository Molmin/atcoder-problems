Score : $400$ points

## Problem Statement

We have an empty sequence $A$.<br>
Given $Q$ queries, process them in order.<br>
Each query is of one of the following three types.  

- <p>`1 x` : Insert $x$ to $A$.  </p>
- <p>`2 x k` : Among the elements of $A$ that are less than or equal to $x$, print the $k$-th largest value.  ($k$ is no more than $\bf{5}$)<br>
    If there are less than $k$ elements of $A$ that are less than or equal to $x$, then print `-1`.</p>
- <p>`3 x k` : Among the elements of $A$ that are greater than or equal to $x$, print the $k$-th smallest value.  ($k$ is no more than $\bf{5}$)<br>
    If there are less than $k$ elements of $A$ that are greater than or equal to $x$, then print `-1`.</p>

## Constraints

- $1\leq Q \leq 2\times 10^5$
- $1\leq x\leq 10^{18}$
- $1\leq k\leq 5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $Q$
> 
> $\text{query}_1$
> 
> $\text{query}_2$
> 
> $\vdots$
> 
> $\text{query}_Q$

In the $i$-th query $\text{query}_i$, the type of query $c_i$ (which is either $1, 2$, or $3$) is given first.<br>
If $c_i=1$, then $x$ is additionally given; if $c_i=2, 3$, then $x$ and $k$ are additionally given.

In other words, each query is given in one of the following three formats:  

> $1$ $x$
> $2$ $x$ $k$
> $3$ $x$ $k$

## Output

Print $q$ lines, where $q$ is the number of queries such that $c_i=2,3$.<br>
The $j$-th line $(1\leq j\leq q)$ should contain the answer for the $j$-th such query.

```input1
11
1 20
1 10
1 30
1 20
3 15 1
3 15 2
3 15 3
3 15 4
2 100 5
1 1
2 100 5
```

```output1
20
20
30
-1
-1
1
```

After $\text{query}_{1,2,3,4}$ have been processed, we have $A=(20,10,30,20)$.  

For $\text{query}_{5,6,7}$, the elements of $A$ greater than or equal to $15$ are $(20,30,20)$.<br>
The $1$-st smallest value of them is $20$; the $2$-nd is $20$; the $3$-rd is $30$.