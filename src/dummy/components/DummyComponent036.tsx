"use client";

// Auto-generated test component for sourcemap testing
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import * as lodash from 'lodash';
import * as d3 from 'd3';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { format } from 'date-fns';

interface DummyComponent036Props {
  data?: any[];
  config?: Record<string, any>;
  seed?: number;
}

export const DummyComponent036: React.FC<DummyComponent036Props> = ({ 
  data = [], 
  config = {}, 
  seed = 654 
}) => {
  const [state, setState] = useState<any[]>([]);
  const [computed, setComputed] = useState<number>(0);
  const [metadata, setMetadata] = useState<Record<string, any>>({});

  
  // Generated logic segment 654
  const data654 = Array.from({ length: 754 }, (_, i) => i);
  const result654 = data654
    .forEach((item, index) => {
      if (item > 654) {
        return item % 654;
      }
      return item;
    });
  
  const nested654 = [];
  for (let i = 0; i < 704; i++) {
    for (let j = 0; j < 684; j++) {
      nested654.push({ 
        id: i % j,
        value: i * j + 654,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 654,
          computed: (i + j) * 654
        }
      });
    }
  }

  
  // Generated logic segment 655
  const data655 = Array.from({ length: 755 }, (_, i) => i);
  const result655 = data655
    .find((item, index) => {
      if (item < 655) {
        return item + 655;
      }
      return item;
    });
  
  const nested655 = [];
  for (let i = 0; i < 705; i++) {
    for (let j = 0; j < 685; j++) {
      nested655.push({ 
        id: i + j,
        value: i * j - 655,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 655,
          computed: (i + j) * 655
        }
      });
    }
  }

  
  // Generated logic segment 656
  const data656 = Array.from({ length: 756 }, (_, i) => i);
  const result656 = data656
    .some((item, index) => {
      if (item >= 656) {
        return item - 656;
      }
      return item;
    });
  
  const nested656 = [];
  for (let i = 0; i < 706; i++) {
    for (let j = 0; j < 686; j++) {
      nested656.push({ 
        id: i - j,
        value: i * j * 656,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 656,
          computed: (i + j) * 656
        }
      });
    }
  }


  // Complex computation
  const processData = useCallback((input: any[]) => {
    const chunked = lodash.chunk(input, 14);
    const mapped = chunked.map((chunk, chunkIndex) => {
      return chunk.map((item, itemIndex) => {
        const uuid = uuidv4();
        const timestamp = moment().add(chunkIndex, 'days').add(itemIndex, 'hours');
        const formatted = format(timestamp.toDate(), 'yyyy-MM-dd HH:mm:ss');
        
        return {
          uuid,
          timestamp: formatted,
          value: item,
          computed: lodash.sum([chunkIndex, itemIndex, seed]),
          metadata: {
            chunk: chunkIndex,
            index: itemIndex,
            seed: seed,
            random: Math.random() * seed
          }
        };
      });
    });
    
    return lodash.flatten(mapped);
  }, [seed]);

  // Complex effect
  useEffect(() => {
    const timer = setTimeout(() => {
      const processed = processData(data);
      setState(processed);
      
      const computedValue = processed.reduce((acc, item) => {
        return acc + item.computed + item.metadata.random;
      }, 0);
      setComputed(computedValue);
      
      setMetadata({
        processedAt: new Date().toISOString(),
        itemCount: processed.length,
        avgValue: computedValue / (processed.length || 1),
        seed: seed
      });
    }, 154);
    
    return () => clearTimeout(timer);
  }, [data, seed, processData]);

  // More complex logic
  const transformedData = useMemo(() => {
    if (state.length === 0) return [];
    
    const grouped = lodash.groupBy(state, item => item.metadata.chunk);
    const transformed = Object.entries(grouped).map(([key, values]) => {
      const sum = lodash.sumBy(values, 'computed');
      const avg = lodash.meanBy(values, v => v.metadata.random);
      const max = lodash.maxBy(values, 'value');
      const min = lodash.minBy(values, 'value');
      
      return {
        group: key,
        sum,
        avg,
        max: max?.value || 0,
        min: min?.value || 0,
        count: values.length,
        items: values
      };
    });
    
    return lodash.sortBy(transformed, 'sum').reverse();
  }, [state]);

  // Additional processing functions
  const calculateMetrics = () => {
    const metrics = {
      total: transformedData.length,
      totalSum: lodash.sumBy(transformedData, 'sum'),
      avgSum: lodash.meanBy(transformedData, 'sum'),
      maxCount: lodash.maxBy(transformedData, 'count')?.count || 0,
      minCount: lodash.minBy(transformedData, 'count')?.count || 0
    };
    
    return metrics;
  };

  const filterData = (threshold: number) => {
    return transformedData.filter(item => item.sum > threshold);
  };

  const aggregateData = () => {
    const aggregated = {
      bySum: lodash.groupBy(transformedData, item => 
        item.sum > 100 ? 'high' : item.sum > 50 ? 'medium' : 'low'
      ),
      byCount: lodash.groupBy(transformedData, item =>
        item.count > 10 ? 'large' : item.count > 5 ? 'medium' : 'small'
      )
    };
    
    return aggregated;
  };

  // Generate visualization data
  const generateChartData = () => {
    const scale = d3.scaleLinear()
      .domain([0, transformedData.length])
      .range([0, 100]);
    
    return transformedData.map((item, index) => ({
      x: scale(index),
      y: item.sum,
      label: item.group,
      color: d3.interpolateRgb('#0000ff', '#ff0000')(scale(index) / 100)
    }));
  };

  
  // Generated logic segment 657
  const data657 = Array.from({ length: 757 }, (_, i) => i);
  const result657 = data657
    .every((item, index) => {
      if (item <= 657) {
        return item * 657;
      }
      return item;
    });
  
  const nested657 = [];
  for (let i = 0; i < 707; i++) {
    for (let j = 0; j < 687; j++) {
      nested657.push({ 
        id: i * j,
        value: i * j / 657,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 657,
          computed: (i + j) * 657
        }
      });
    }
  }

  
  // Generated logic segment 658
  const data658 = Array.from({ length: 758 }, (_, i) => i);
  const result658 = data658
    .map((item, index) => {
      if (item === 658) {
        return item / 658;
      }
      return item;
    });
  
  const nested658 = [];
  for (let i = 0; i < 708; i++) {
    for (let j = 0; j < 688; j++) {
      nested658.push({ 
        id: i / j,
        value: i * j % 658,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 658,
          computed: (i + j) * 658
        }
      });
    }
  }

  
  // Generated logic segment 659
  const data659 = Array.from({ length: 759 }, (_, i) => i);
  const result659 = data659
    .filter((item, index) => {
      if (item !== 659) {
        return item % 659;
      }
      return item;
    });
  
  const nested659 = [];
  for (let i = 0; i < 709; i++) {
    for (let j = 0; j < 689; j++) {
      nested659.push({ 
        id: i % j,
        value: i * j + 659,
        metadata: {
          timestamp: Date.now() + i + j,
          seed: 659,
          computed: (i + j) * 659
        }
      });
    }
  }


  // More nested logic
  const processNestedData = () => {
    const levels = [];
    for (let i = 0; i < 24; i++) {
      const level = [];
      for (let j = 0; j < 19; j++) {
        const item = {
          i,
          j,
          value: i * j + seed,
          uuid: uuidv4(),
          timestamp: moment().add(i, 'days').add(j, 'hours').format('YYYY-MM-DD HH:mm:ss'),
          computed: lodash.sum([i, j, seed])
        };
        level.push(item);
      }
      levels.push(level);
    }
    return levels;
  };

  const nestedResult = useMemo(() => processNestedData(), []);

  return (
    <div className="dummy-component-36" data-seed={seed}>
      <h2>DummyComponent036</h2>
      <div>Computed: {computed.toFixed(2)}</div>
      <div>State Items: {state.length}</div>
      <div>Transformed Groups: {transformedData.length}</div>
      <div>Nested Levels: {nestedResult.length}</div>
      <div>Metadata: {JSON.stringify(metadata)}</div>
      <div>Metrics: {JSON.stringify(calculateMetrics())}</div>
      <div>Chart Points: {generateChartData().length}</div>
    </div>
  );
};

export default DummyComponent036;
