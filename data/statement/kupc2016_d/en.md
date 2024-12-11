Score : $150$ points

## Problem Statement

  There is a long blackboard with $2$ rows and $N$ columns in a classroom of Kyoto University. 
  This blackboard is so long that it is impossible to tell which cells are already used and which unused. 

  Recently, a blackboard retrieval device was installed at the classroom. 
  To use this device, you type a search query that forms a rectangle with 2 rows and any length of columns, where each cell is used or unused. 
  When you input a query, the decive answers whether the rectangle that corresponds to the query exists in the blackboard. 
  Here, for a rectangle that corresponds to a search query, if two integer $i, j$ ( $i &lt; j$ ) exist
  and the rectangle equals to the partial blackboard between column $i$ and $j$ ,
  the rectangle is called a sub-blackboard of the blackboard. 

  You are currently preparing for a presentation at this classroom.
  To make the presentation go well, you decided to write a program to detect the status of the whole blackboard using the retrieval device. 
  Since it takes time to use the device, you want to use it as few times as possible. 

  The status of the whole blackboard is already determined at the beginning and does not change while you are using the device. 

## Input

The first input is given in the following format:

> $N$

 $N$ $(1 \leq N \leq 100)$ is an integer that represents the length of the blackboard. 

  After this input value, your program must print search queries. 
  A search query has the following format. 

> $s_1$
> 
> $s_2$

  Here, $s_1$ represents the upper part of the blackboard and $s_2$ represents the lower. 
  `#` in $s_1$ and $s_2$ represents the cell is already used and `.` represents the cell is still unused. 
  The lengths of $s_1$ and $s_2$ are arbitrary, but they must be the same. 
  Make sure to insert a line break at the end of the lines. 

  Every time your program prints a search query, a string that represents the search result of the device is returned in the followin format. 

> $r$

  $r$ is either `T` or `F` . 
  The meaning of each character is as follows. 

  

- `T` represents that the sub-blackboard that corresponds to the search query exists in the blackboard.
- `F` represents that the sub-blackboard that corresponds to the search query does not exist in the blackboard.

  If the search query equals to the whole blackboard or the number of the search queries exceeds the limit, string `end` is given instead of $r$ .
  Once you receive this string, exit your program immediately. 
  If your program prints the whole blackboard as a search query before exceedin the limit, it is judged as *Accepted*. Note that the search query that represents the whole blackboard is also counted as the number of search queries. 

  Note that the output needs to be flushed every time the output is printed. 
  For example, In C/C++, search query `s1`, `s2` can be printed as follows. 

  printf("%s\n%s\n", s1, s2); fflush(stdout);

  Make sure your program receive all the input from the device. Otherwise, the result may be *Time Limit Exceeded* . 

## Query Limit

  The maximun number of search queries is $420$.
  If the number of queries exceeds the limit, the result will be *Query Limit Exceeded* . 

## Sample Input and Output

The following is an example where $N=3$ and the blackboard is as follows. 

```plain
.#.
...
```

Note that your program does not know the state of the blackboard. 

```plain
Output of your program
    Input to your program
    Explanation
  
  
    
    3
    The length of the blackboard is given
  
  
    ..##
    
    Output a search query
  
  
    
    F
    The sub-blackboard does not exist
  
  
    ..
    
    Output a search query
  
  
    
    T
    The sub-blackboard exists
  
  
    ....
    
    Output a search query
  
  
    
    F
    The sub-blackboard does not exist
  
  
    .#..
    
    Output a search query
  
  
    
    T
    The sub-blackboard exists
  
  
    .#....
    
    Output a search query
  
  
    
    end
    Exit your program because the above sub-blackboard equals to the whole blackboard.
```