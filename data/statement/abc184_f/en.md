Score : $600$ points

## Problem Statement

Takahashi will participate in a programming contest, which lasts for $T$ minutes and presents $N$ problems.<br>
With his extrasensory perception, he already knows that it will take $A_i$ minutes to solve the $i$-th problem.<br>
He will choose zero or more problems to solve from the $N$ problems so that it takes him no longer than $T$ minutes in total to solve them.<br>
Find the longest possible time it takes him to solve his choice of problems.  

## Constraints

- All values in input are integers.
- $1 \le N \le 40$
- $1 \le T \le 10^9$
- $1 \le A_i \le 10^9$

## Input

Input is given from Standard Input in the following format:

> $N$ $T$
> 
> $A_1$ $\dots$ $A_N$

## Output

Print the answer as an integer.

```input1
5 17
2 3 5 7 11
```

```output1
17
```

If he chooses the $1$-st, $2$-nd, $3$-rd, and $4$-th problems, it takes him $2+3+5+7=17$ minutes in total to solve them, which is the longest possible time not exceeding $T=17$ minutes.

```input2
6 100
1 2 7 5 8 10
```

```output2
33
```

It is optimal to solve all the problems.

```input3
6 100
101 102 103 104 105 106
```

```output3
0
```

He cannot solve any of the problems.

```input4
7 273599681
6706927 91566569 89131517 71069699 75200339 98298649 92857057
```

```output4
273555143
```

If he chooses the $2$-nd, $3$-rd, and $7$-th problems, it takes him $273555143$ minutes in total to solve them.