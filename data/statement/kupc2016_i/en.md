Score : $300$ points

    
    
      
	

## Problem Statement

	

          Eli- $1$ started a part-time job handing out leaflets for $N$ seconds. 
          Eli- $1$ wants to hand out as many leaflets as possible with her special ability, Cloning.  
          Eli- $gen$ can perform two kinds of actions below. 
	

	

- Clone herself and generate Eli- $(gen + 1)$ .  (one Eli- $gen$ (cloning) and one Eli- $(gen + 1)$ (cloned) exist as a result of Eli-$gen$ 's cloning.)
            This action takes $gen \times C$ ( $C$ is a coefficient related to cloning. ) seconds.
- Hand out one leaflet. This action takes one second regardress of the generation ( $=gen$ ).

	

          They can not hand out leaflets while cloning. 
          Given $N$ and $C$ , find the maximum number of leaflets Eli- $1$ and her clones can hand out in total modulo $1000000007$ ($= 10^9 + 7$). 
	

      
    
    
    
      
	

## Constraints

	

- $1 \leq Q \leq 100000 = 10^5$
- $1 \leq N_q \leq 100000 = 10^5$
- $1 \leq C_q \leq 20000 = 2 \times 10^4$

      
    

    
    
    
      
	
	  

## Input

	  

The input is given from Standard Input in the following format: 

> $Q$
> 
> $N_1$ $C_1$
> 
> :
> 
> $N_Q$ $C_Q$
	  

The input consists of multiple test cases. On line $1$ ,  $Q$ that represents the number of test cases is given. 
            Each test case is given on the next $Q$ lines.
            For the test case $q$ ( $1 \leq q \leq Q$ ) , $N_q$ and 
            $C_q$ are given separated by a single space. 
            $N_q$ and $C_q$ represent the working time and the coefficient related to cloning for test case $q$ respectively. 
	  

	
      
      
      
	
	  

## Output

	  

            For each test case, Print the maximum number of leaflets Eli- $1$ and her clones can hand out modulo $1000000007$ ( $= 10^9 + 7$ ). 
	

      
      
	
	  

## Partial Scores

	  

 $30$ points will be awarded for passing the test set satisfying the condition: $Q = 1$ . 

	  

Another $270$ points will be awarded for passing the test set without addtional constraints and you can get $300$ points in total. 

	
      
      
    
    
    
    
    
      
	
```input1
2
20 8
20 12
```
      
    
    
    
      
	
```output1
24
20
```
	
	

 For the first test case, while only $20$ leaflets can be handed out without cloning,
	  $24$ leaflets can be handed out by cloning first and two people handing out$12$ leaflets each. 

	

 For the second test case, since two people can only hand out $8$ leaflets each if Eli- $1$ clones, she should hand out $20$ leaflets without cloning. 

 
      
    
    
    
      
	
```input2
1
20 3
```
      
    
    
    
      
	
```output2
67
```

One way of handing out 67 leaflets is like the following image. Each black line means cloning, and each red line means handing out. 

  ![](https://atcoder.jp/img/other/kupc2016/sushi/sample2.png)

	

 This case satisfies the constraint of the partial score. 

      
    
    
    
      
	
```input3
1
200 1
```
      
    
    
    
      
	
```output3
148322100
```
	

 Note that the value modulo $1000000007$ ( $10^9 + 7$ ) must be printed. 

	

 This case satisfies the constraint of the partial score.