Score : $200$ points

## Problem Statement

Your company has $N$ employees, called Employee $1$ through $N$.<br>
You have received two work orders, called Work A and B, which must be completed.<br>
Employee $i$ can complete Work A in $A_i$ minutes and Work B in $B_i$ minutes.

You will assign each work to one employee.<br>
You can assign both works to the same employee, in which case the time it takes for him/her to complete them is the sum of the times it takes for him/her to do them individually.<br>
If you assign the works to different employees, the time it takes for them to complete them is the longer of the times it takes for them to do their respective works.<br>
Find the shortest possible time needed to complete the works.

## Constraints

- $2 \le N \le 1000$
- $1 \le A_i \le 10^5$
- $1 \le B_i \le 10^5$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$ $B_1$
> 
> $A_2$ $B_2$
> 
> $A_3$ $B_3$
> 
> $\hspace{15pt} \vdots$
> 
> $A_N$ $B_N$

## Output

Print the shortest possible time needed to complete the works, in minutes.

```input1
3
8 5
4 4
7 9
```

```output1
5
```

If you assign Work A to Employee $2$ and Work B to Employee $1$, they will complete them in $4$ and $5$ minutes, respectively.<br>
Since you assigned the works to different employees, it will take $\max(4, 5) = 5$ minutes for the two works to be finished.<br>
It is impossible to finish them earlier.

```input2
3
11 7
3 2
6 7
```

```output2
5
```

It is optimal to assign both works to Employee $2$.<br>
Note that if you assign both works to the same employee, the time it takes for him/her to complete them is the sum of the times it takes for him/her to do them individually.